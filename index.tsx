import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { Box } from './components/foundation/Box';
import { Button } from './components/inputs/Button';

function App() {
  return (
    <ThemeProvider>
      <Box p="lg" bg="#f5f5f5">
        <Button variant="primary">Primary Action</Button>
      </Box>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
