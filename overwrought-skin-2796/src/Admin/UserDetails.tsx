import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar"
import { useEffect } from "react";
import { fetchUserData } from "../Redux/AdminRedux/action copy 2";
import { styled } from "styled-components";
import { UserObjectNew } from "../constrain";
import UserCard from "./UserCard";



export const UserDetails=()=>{
    const dispatch=useDispatch()
const users = useSelector((state: any) => state.dataReducer.user);

console.log(users);




  useEffect(()=>{
    dispatch(fetchUserData)

  },[])
  
    return (
        <div>
              <AdminNavbar/>
              <DIV>
     
     <div className="useSection">
     {
      users && users.map((el:UserObjectNew)=>(
        <UserCard  key={el.id} {...el}/>
      ))
     }

     </div>
    </DIV>
        </div>
    )
    }

    const DIV = styled.section`
width: 90%;
margin: 0 auto;
padding: 40px 0;


.useSection{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
}


`