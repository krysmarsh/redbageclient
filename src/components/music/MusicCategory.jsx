// import { useState, useEffect } from 'react';
// import { Typography, Box, Select, MenuItem, Button } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
// import fetchRecipesByCategory from '../../requests/fetchRecipesByCategory';
// import RecipeCardArea from '../common/RecipeCardArea';
// import RecipeCardContainer from '../common/RecipeCardContainer';
// import RecipeCard from '../common/RecipeCard';
// import MainContentContainer from '../common/MainContentContainer';
// const orders = [
//     {
//         value: 'views',
//         label: 'Views',
//     },
//     {
//         value: 'date',
//         label: 'Date'
//     },
// ];
// const directions = [
//     {
//         value: 'decreasing',
//         label: 'Descending'
//     },
//     {
//         value: 'increasing',
//         label: 'Ascending'
//     }
// ]
// const RecipeCategory = () => {
//     const [music, setRecipes] = useState([]);
//     const { cat } = useParams();
//     const [order, setOrder] = useState('views');
//     const [page, setPage] = useState(1);
//     const [maxPage, setMaxPage] = useState(50);
//     const [direction, setDirection] = useState('decreasing')
//     const [error, setError] = useState(false);

//     const handleOrderChange = (e) => {
//         setOrder(e.target.value);
//     };
//     const handleDirectionChange = e => {
//         setDirection(e.target.value);
//     }
//     const handlePageChange = direction => e => {
//         switch(direction) {
//             case 'increase':
//                 setPage(curr => curr < maxPage ? curr + 1 : curr);
//                 break;
//             case 'decrease':
//                 setPage(curr => curr > 1 ? curr  - 1 : curr);
//                 break;
//             default:
//                 break;
//         }
//         window.scrollTo(0,0);
//     }
//     useEffect(() => {
//         (async () => {
//             try {
//                 const { status, json } = await fetchRecipesByCategory(
//                     cat,
//                     `?orderby=${order}&direction=${direction}&page=${page}`
//                 );
//                 if (status === 200) {
//                     setRecipes(json.recipes);
//                     setMaxPage(json.pages);
//                 }
//             } catch (err) {
//                 setError(true);
//             }
//         })();
//     }, [cat, order, direction, page]);

//     return (
//         <>
//             <MainContentContainer>
//                 {error ? (
//                     <></>
//                 ) : (
//                     <>
//                         <Typography
//                             variant="h1"
//                             align="center"
//                             color="secondary.dark"
//                             sx={{textTransform: 'capitalize'}}
//                         >
//                             {cat} Recipes:
//                         </Typography>
//                         <Box
//                             sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}
//                         >
//                             <Typography color='info'>
//                                 Sort:
//                             </Typography> 
//                             <Select
//                                 sx={{mx: 2}}
//                                 defaultValue="views"
//                                 onChange={handleOrderChange}
//                                 variant="standard"
//                                 color="info"
//                             >
//                                 {orders.map((option) => (
//                                     <MenuItem
//                                         key={option.value}
//                                         value={option.value}
//                                     >
//                                         {option.label}
//                                     </MenuItem>
//                                 ))}
//                             </Select>
//                             <Select
//                                 defaultValue="decreasing"
//                                 onChange={handleDirectionChange}
//                                 variant="standard"
//                                 color="info"
//                             >
//                                 {artist.map((option) => (
//                                     <MenuItem
//                                         key={option.value}
//                                         value={option.value}
//                                     >
//                                         {option.label}
//                                     </MenuItem>
//                                 ))}
//                             </Select>
//                         </Box>
//                         <RecipeCardArea>
//                             {music.map((music) => (
//                                 <RecipeCardContainer key={music.id}>
//                                     <RecipeCard music={music} />
//                                 </RecipeCardContainer>
//                             ))}
//                         </RecipeCardArea>
//                         <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                             {page > 1 ? <Button color='info' onClick={handlePageChange('decrease')}>Previous Page</Button> : <></>}
//                             {page < maxPage ? <Button color='info' onClick={handlePageChange('increase')}>Next Page</Button> : <></>}
//                         </Box>
//                     </>
//                 )}
//             </MainContentContainer>
//         </>
//     );
// };

// export default RecipeCategory;
