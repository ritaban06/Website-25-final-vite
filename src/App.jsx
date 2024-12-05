import {React , useEffect} from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scroll/ScrollToTop'
import ScrollUp from './components/scroll/ScrollUp'
import routes from './pages';
import Page404 from './pages/404';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {

    useEffect(() => {
        console.log('App mounted');
        AOS.init({
          duration : 2000
        }); 
      }, []);

    console.log('App rendering');

    return (
        <>
            
            <Header />
              <ScrollUp />
              <Routes>

                {
                    routes.map((data,idx) => (
                        <Route key={idx} path={data.path} element={data.component} exact />
                    ))
                }

                <Route path='*' element={<Page404 />} />
            </Routes>

            <ScrollToTop />

            <Footer />
            <Analytics />
            <SpeedInsights/>
    
        </>
    );
}

export default App;
