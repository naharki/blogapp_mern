import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow, styled
} from '@mui/material';


//
import { catagories } from '../../constants/data';

const TableStyle =styled(Table)`
border: 1px solid rgba(224, 224, 224, 1);
`;

const ButtonStyle = styled(Button)`
margin: 20px;
width: 65%;
background: #6495ED;
color: #fff;
`;

const Catagories = () => {
  return (
    <>
      <ButtonStyle variant='contained'>Create Blog</ButtonStyle>
      <TableStyle>
        <TableHead>
          <TableRow>
            <TableCell>All Catagories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {catagories.map((catagory) => (
            <TableRow key={catagory.id}>
              <TableCell>{catagory.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyle>
    </>
  );
};

export default Catagories;
