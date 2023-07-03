import React from 'react'
import {Alert, Container,Button} from 'reactstrap'

export const Home = () => {
    return (
        <div>
             <Alert color="secondary">
             <h1  className='display-3'>Learn Developing App Using React</h1>
             <p>This is developed by Advanced Auto Parts for learning purpose
                backend is on spring boot and front end on reactjs
             </p>
             <Container>
              <Button> Start Using</Button>
            </Container>
            </Alert>
        </div>
    )
}
