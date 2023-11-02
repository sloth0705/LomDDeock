import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => {
            setHello(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <div>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
            <Stack direction="horizontal" gap={2}>
              <Button as="a" variant="primary">
                Button as link
              </Button>
              <Button as="a" variant="success">
                Button as link
              </Button>
            </Stack>
        </>
    );
}

export default App;