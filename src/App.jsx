import { TextField,Button, Typography,
  createTheme,ThemeProvider,CssBaseline,
  Box,IconButton,Paper  
 } from "@mui/material";
import {useState,useMemo} from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DeleteIcon from '@mui/icons-material/Delete'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useTheme} from "@mui/material/styles";

export default function App(){
  const[input,setInput] = useState("");
  const[Todos,setTodos] = useState([]);
  const[mode,setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () =>
    {
      setMode((prev) =>(prev === 'light' ?'dark' :'light'));
    },
  }))

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary:{
          main:'#19276d'
        },
        secondary: {
          main: '#dc004e',
        }
      }
    }),[mode]      
  );
  

  return(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
  <div className={`min-h-screen p-8 transition-colors duration-500 ${mode === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

    <IconButton
   onClick={colorMode.toggleColorMode}
   color="inherit"
   className="fixed top-4 right-4 text-white dark:text-yellow-400"
  >
    {theme.palette.mode === 'dark'? <Brightness7Icon/> : <Brightness4Icon/>}
  </IconButton>
  
  <Paper elevation={10} className="max-w-xl mx-auto p-6 rounded-xl shadow-2xl bg-white dark:bg-gray-800 transition-colors duration-500"><div>
    <Typography
    variant="h4"
    components="h1"
    gutterBottom
    className="font-extrabold text-indigo-600 dark:text-indigo-400 border-b pb-2 mb-4"
    >⚡️ Todo App</Typography>
    <Box 
    sx ={{
      display: 'flex',
      gap:2,
      alignItems: 'flex-start',
      mb:3,
    }}
    >
    <TextField
    fullWidth
    label="Todo Item"
    variant="outlined"
    value = {input}
    helperText="Enter the next task here"
    onChange={(event) => 
      setInput(event.target.value)      
    }
    onKeyDown={(e) => {
      if(e.key ==='Enter'){
        if(input.trim()){
          setTodos ([...Todos,input]);
          setInput("");         
        }
      }
    }}
    sx={{
            input: { color: theme.palette.mode === 'dark' ? 'white' : 'black' },
            '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)' },
            },
        }}
    ></TextField>    
    <Button variant="contained" color="secondary" onClick={() => {
      if(!input.trim())
        return;
      setTodos([...Todos,input]);
        setInput("");

      }}
      sx={{mt:1}}
      >Save</Button>
      </Box>
    <ul className="list-none p-0 m-0">
      {Todos.map((todo,id) => <li key={id} className="mt-2">
        <Typography variant="caption" color="text.secondary">Item{id+1}</Typography>
        <TodoItem
        Text={todo}
        index={id}
        Todos={Todos}
        setTodos={setTodos}
        />
        
      </li>)}
    </ul>        
    </div>
    </Paper>
    </div>
    </ThemeProvider>    
  );
}
function TodoItem({Text,index,Todos,setTodos}){
  const theme = useTheme();

    const deleteTodo = () =>{
      setTodos(Todos.filter((_,i) => i!==index));
    };

    const moveDown = (index) =>{
      if(index == Todos.length-1){
        return;
      }
      setTodos(prev =>{
        const copy = [...prev];
        [copy[index],copy[index+1]] = [copy[index+1],copy[index]]
        return copy;
        });
    }

    const moveUp = (index) =>{
      if(index == 0)
        return;    
    setTodos(prev => {
      const copy = [...prev];
      [copy[index],copy[index-1]] = [copy[index-1],copy[index]];
      return copy;
    })
  }

 return( 
  <Box sx={{
    display:'flex',
    border: '1px solid',
    borderColor:'divider',
    alignItems:'center',
    justifyContent:'space-between',
    p:3,
    my:2,
    borderRadius: 2,
    backgroundColor : theme.palette.mode === 'dark' ? 'grey.800' : 'background.paper',
    boxShadow :3,
    '&:hover':{boxShadow: 6}
  }}> 
  <Typography variant = "body1"
  sx={{flexGrow : 1,color: theme.palette.mode ==='dark' ? 'grey.100' : 'text.primary'}}
  >{Text}</Typography>
  <Box className="flex space-x-2">
  <IconButton
  variant="contained"
  onClick={() => moveUp(index)}
  color="default"
  disabled={index === 0}  
  ><ArrowUpwardIcon/></IconButton>
  <IconButton
  color="default"
  disabled={index === Todos.length-1}
  onClick={() => moveDown(index)}
  ><ArrowDownwardIcon/></IconButton>
  <IconButton
  color="error"
  onClick={() => deleteTodo(index)}
  ><DeleteIcon/>
  </IconButton>  
  </Box>
  </Box>
 );
}

