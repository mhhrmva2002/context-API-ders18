import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useBasketContext } from "../context/BasketContext";

const Basket = () => {
  const { basket, setBasket } = useBasketContext();
  const deleteFromCart= (product)=>{
    setBasket(basket.filter((item) => item.id !== product.id))
  }
  return (
    <TableContainer component={Paper} style={{width:"80%",margin:"50px auto"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Rating rate</TableCell>
            <TableCell align="center">Rating count</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.rating.rate}</TableCell>
              <TableCell align="center">{row.rating.count}</TableCell>
              <TableCell align="center">
                <FontAwesomeIcon onClick={()=>deleteFromCart(row)} icon={faTrash} color="red"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center" style={{color:"red", fontSize:"20px"}} onClick={()=>setBasket([])}>
        Clear Al <FontAwesomeIcon icon={faTrash} />
        </TableCell>
        </TableRow>

        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default Basket