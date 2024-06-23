import { Dashboard } from '@mui/icons-material';
import {  Link, Typography } from '@mui/material';
import {  ThemedSiderV2 } from '@refinedev/mui';

const SiderTitle: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    return (
        <Link href={import.meta.env.VITE_DASHBOARD_URL} display={"flex"} alignItems={"center"}   gap={1.5} underline={"none"}  color={"GrayText"}>
            <Dashboard color='primary'/> { collapsed ?  <></> : <Typography >Alquser dashboard</Typography>}
        </Link>
    );
};


const DashboardSider = () => {
  return (
    <ThemedSiderV2
        Title={({ collapsed }) => <SiderTitle collapsed={collapsed} />} 
        render={({ items, logout }) => {
            return (
            <>
                {items}
                {logout}
            </>
            );
        }}
    >
    </ThemedSiderV2>
  );

}


export default DashboardSider
