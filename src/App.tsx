import './App.css';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './pages/dashBoard';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='w-screen min-h-screen bg-opacity-75 bg-center bg-cover bg-gradient-to-r from-purple-200 to-blue-50'>
          <Header />
          <main className='container px-4 py-8 mx-auto '>
            <Dashboard />
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
