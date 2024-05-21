'use client'

import { useRouter } from 'next/navigation'
import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav } from 'rsuite';

import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import Image from 'next/image';

const Dashboard = () => {
    const router = useRouter();

    const navigate = () => {
        router.push('/users/create')
    }

    return (
        <div className="dashboard-layout">
        <Container style={{minHeight: '100vh'}}>
          <Sidebar
            style={{ display: 'flex', flexDirection: 'column', backgroundColor:'#1a1d24', borderTopRightRadius:'24px' }}
            collapsible
          >
            <Sidenav.Header>
               <Image src="/brand.png" width={300} height={300} alt='Project Next'></Image>
            </Sidenav.Header>
            <Sidenav  defaultOpenKeys={['3']} appearance="subtle">
              <Sidenav.Body>
                <Nav>
                  <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<GroupIcon />}>
                    User Group
                  </Nav.Item>
                  <Nav.Menu
                    eventKey="4"
                    trigger="hover"
                    title="Settings"
                    icon={<GearCircleIcon />}
                    placement="rightStart"
                  >
                    <Nav.Item eventKey="4-1">Applications</Nav.Item>
                    <Nav.Item eventKey="4-2">Websites</Nav.Item>
                    <Nav.Item eventKey="4-3">Channels</Nav.Item>
                    <Nav.Item eventKey="4-4">Tags</Nav.Item>
                    <Nav.Item eventKey="4-5">Versions</Nav.Item>
                  </Nav.Menu>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            {/* <NavToggle expand={expand} onChange={() => setExpand(!expand)} /> */}
          </Sidebar>
  
          <Container style={{padding:'24px'}}>
            <Header>
              <h2>Page Title</h2>
            </Header>
            <Content>Content</Content>
          </Container>
        </Container>
    </div>
    )
}

export default Dashboard;