import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function SideBar() {
    const iconList = [<AddCircleIcon></AddCircleIcon>, <ManageSearchIcon></ManageSearchIcon>]
    const links = ["./AddNewBuilding", "./SearchBuilding"]
    return (<List>
        {['Add new building', 'Search building'].map((text, index) => (
            <ListItem button key={text} disablePadding href={links[index]} component="a">
                <ListItemButton>
                    <ListItemIcon>
                        {iconList[index]}

                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>)

}