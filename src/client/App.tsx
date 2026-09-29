import { Routes, Route, Navigate } from 'react-router';
import Navbar from './shared/components/Navbar.tsx';
import Footer from './shared/components/Footer.tsx';
import ErrorBoundary from './shared/components/ErrorBoundary.tsx';
import ProductListingPage from './pages/ProductListingPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-ps-surface">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Navigate to="/products" replace />} />
                    <Route path="/products" element={<ProductListingPage />} />
                    <Route path="/products/:id" element={<ErrorBoundary><ProductDetailPage /></ErrorBoundary>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
