'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import {
	Container,
	Header,
	Content,
	Footer,
	Form,
	ButtonToolbar,
	Button,
	Navbar,
	Panel,
	FlexboxGrid
  } from 'rsuite';
  

export default function Home() {

	const router = useRouter();


	return (
		<div className="login-page">
    <Container>
      <Content>
	  <FlexboxGrid justify="center" >
			<Image src="/brand.png" alt='Project Next' width="300" height="300"></Image>
		</FlexboxGrid>
        <FlexboxGrid justify="center" >
          <FlexboxGrid.Item colspan={6}>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button>Sign in</Button>
                    <Button appearance="primary">Forgot password?</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>

		</div>
	)
}
