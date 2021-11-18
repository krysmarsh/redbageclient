import React from 'react';
import { Table, Button } from 'reactstrap';

const MusicTable = (props) => { //1
    
return (
    <div>
        <h3>All My Music</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Songs</th>
                    <th>Album</th>
                    <th>Share?</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* 1 */}
                {
    props.music.map((music, id) => { 
        return ( 
            <tr key={id}> 
                <th scope="row">{music.id}</th>
                <td>{music.artist}</td>
                <td>{music.genre}</td>
                <td>{music.songs}</td>
                <td>{music.album}</td>
                <td>{music.isPublic}</td>
                <td>{music.photoURL}</td>
                <td>{music.category}</td>
                <td>
                    
                    <Button id={music.id} onClick={props.delete} color="danger">Delete</Button>| 
                    <Button id={music.id} onClick={e => props.update(e, music)} color="warning">Update</Button>
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

export default MusicTable;