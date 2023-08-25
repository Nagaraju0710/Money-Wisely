import Chart from "../Logingif/Chart.gif"
import img2 from "../Logingif/img2.png"
import img3 from "../Logingif/img3.png"
import giphy from "../Logingif/giphy.webp"
import AdminNavbar from "./AdminNavbar"


export const AdminDashboard = () => {
    return (
        <div>
         <AdminNavbar/>

        <div style={{backgroundColor:"lightblue",height:"1200px",paddingTop:"50px"}}>
            <div style={{ display: "flex", gap: "50px", margin: "70px" }}>
                <div style={{ width: "600px", height: "400px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: '10px 10px' }}>
                    <img src={Chart} alt="" />

                </div>
                <div style={{ width: "600px", height: "400px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: '10px 10px' }}>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div style={{ display: "flex", gap: "50px", margin: "70px" }}>
                <div style={{ width: "600px", height: "200px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: '10px 10px',  }}>
                    <img src={img3} alt="" />
                </div>
                <div >
                    <img style={{ width: "600px", height: "580px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: '10px 10px',  }} src={giphy} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}