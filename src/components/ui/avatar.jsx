import React from 'react';
import md5 from 'md5';

const generateColor = (hash) => {
  const hue = parseInt(hash.substring(0, 2), 16) % 360;
  const saturation = parseInt(hash.substring(2, 4), 16) % 100;
  const lightness = parseInt(hash.substring(4, 6), 16) % 100;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const generateInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const Avatar = ({ name, email, size = 40 }) => {
  const hash = md5(name + email);
  const backgroundColor = generateColor(hash);
  const initials = generateInitials(name);

  return (
    <div
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: size / 2,
        fontWeight: 'bold',
      }}
    >
      {initials}
    </div>
  );
};

const AvatarImage = ({ src, alt, size = 40 }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
    }}
  />
);

const AvatarFallback = ({ children, size = 40 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccc',
      color: 'white',
      fontSize: size / 2,
      fontWeight: 'bold',
    }}
  >
    {children}
  </div>
);

export { Avatar, AvatarImage, AvatarFallback };
