/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import LandingPage from './pages/LandingPage';
import IdeasPage from './pages/IdeasPage';
import AboutPage from './pages/AboutPage';
import ExplorePage from './pages/ExplorePage';
import EditorPage from './pages/EditorPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="ideas" element={<IdeasPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="explore" element={<ExplorePage />} />
        </Route>
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}
