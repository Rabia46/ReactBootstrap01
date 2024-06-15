import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppHeader from './components/Header';
import Apphero from './components/Hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';



function App() {
    return (
        <>
            <div className="App">
                <header id='header'>
                    <AppHeader />
                </header>

                <main>
                    <Apphero />;
                    <AppAbout />;
                    <AppServices />
                    <AppWorks />
                    <AppTeams />
                    <AppTestimonials />
                    <AppPricing />
                    <AppBlog />
                    <AppContact />

                </main>
                <footer id='footer'>
                    <AppFooter />
                </footer>

            </div>




        </>
    )
}
export default App
