import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

export default function Icon() {
  const logoPath = path.join(process.cwd(), 'public', 'logo-mark.png');
  const logoData = fs.readFileSync(logoPath);
  const base64Logo = logoData.toString('base64');
  const src = `data:image/png;base64,${base64Logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          borderRadius: '10px',
        }}
      >
        <img 
          src={src}
          style={{ width: '75%', height: '75%', objectFit: 'contain' }} 
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
