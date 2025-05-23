import { Box } from "@mui/material";
import { useAppSelector } from "../../app/hook";
import Contact from "./Contact";
import StarredMessages from "./StarredMessages";
import SharedMessages from "./SharedMessages";

const Sidebar = ({ }) => {
    const sidebar = useAppSelector(store => store.sidebar);
    return sidebar.open && (
        <Box sx={{ width: 320, height: '100vh' }}>
            {(() => {
                switch (sidebar.type) {
                    case 'contact': return <Contact />
                    case 'starred': return <StarredMessages />
                    case 'shared': return <SharedMessages />
                    default: return <></>;
                }
            })()}
        </Box>
    );
}

export default Sidebar;