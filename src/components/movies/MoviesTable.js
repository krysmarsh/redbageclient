import React from 'react';
import { Table, Button } from 'reactstrap';

const MoviesTable = (props) => { //1
    
return (
    <div>
        <h3>All My Movies</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Titlet</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Platform</th>
                    <th>Review</th>
                    <th>Share?</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
                {
    props.movies.map((movies, id) => { 
        return ( 
            <tr key={id}> 
                <th scope="row">{movies.id}</th>
                <td>{movies.artist}</td>
                <td>{movies.genre}</td>
                <td>{movies.songs}</td>
                <td>{movies.album}</td>
                <td>{movies.isPublic}</td>
                <td>{movies.photoURL}</td>
                <td>{movies.category}</td>
                <td>
                    
                    <Button id={movies.id} onClick={props.delete} color="danger">Delete</Button>| 
                    <Button id={movies.id} onClick={e => props.update(e, movies)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}
            </tbody>
        </Table>
    </div>
);
}

export default MoviesTable;