import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="border-t border-abyss-700 px-6 py-8 text-center text-sm text-mist-500">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
