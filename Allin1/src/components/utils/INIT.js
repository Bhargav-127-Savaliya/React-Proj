import Alert from 'react-bootstrap/Alert';

function INIT() {
  return (
    <Alert variant="info" className='m-5 text-center'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        You Disabeld All the components.
      </p>
      <hr />
      <p className="mb-0">Uncomment components to show output.</p>
    </Alert>
  );
}

export default INIT;