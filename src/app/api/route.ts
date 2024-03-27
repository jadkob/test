import mysql from "mysql"

// @ts-ignore
const pool = mysql.createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6693982",
    password: "2011",
    database: `sql6693982`,

})
export async function GET() {
    let users: any = []
    pool.getConnection((error, connection) => {
        if (error) {
            return Response.json(error)
        }else {
            connection.query("SELECT * FROM users", (err, rows) => {
                if (err) {
                    return Response.json(error)
                }else {
                    console.log(rows)

                    users = rows
                }
            })
        }
        connection.release()
    })
    return Response.json(users)

}