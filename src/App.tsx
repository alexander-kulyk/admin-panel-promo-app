//core
import { Route, Routes } from 'react-router-dom';
//components
import { SingIn } from './Pages/Auth/components/SingIn';
import { Layout } from './Pages/Layout';
import { Home } from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default App;
