import { Button, Menu, MenuItem } from "@mui/material";

const MoreMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Menu
            id="more-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
            "aria-labelledby": "more-button",
            }}
        >
            <MenuItem onClick={handleClose}>Mark as Read</MenuItem>
            <MenuItem onClick={handleClose}>Snooze</MenuItem>
            <MenuItem onClick={handleClose}>Add Star</MenuItem>
            <MenuItem onClick={handleClose}>Filter Messages</MenuItem>
            <MenuItem onClick={handleClose}>Report Spam</MenuItem>
        </Menu>
        </div>
    );
}

export default MoreMenu;