import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  padding: '12px 16px',
  color: isActive ? '#8eb8ff' : '#a8b4cc',
  textDecoration: 'none'
});

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      style={{
        borderTop: '1px solid #1c2635',
        paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <NavLink to="/" style={linkStyle} end>
        Chats
      </NavLink>
      <NavLink to="/settings" style={linkStyle}>
        Settings
      </NavLink>
    </nav>
  );
}
