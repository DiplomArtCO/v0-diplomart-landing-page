import { ImageResponse } from 'next/og'

export const alt = 'DiplomArt - Diplomas y Agendas Personalizadas en Cali'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A1A1A',
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: '#D7B63A',
            letterSpacing: 2,
          }}
        >
          DiplomArt
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#F5F5F7',
            marginTop: 16,
          }}
        >
          El Esfuerzo Hecho Arte
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#F5F5F7',
            opacity: 0.75,
            marginTop: 36,
            textAlign: 'center',
          }}
        >
          Diplomas, agendas y merchandising personalizado en Cali, Colombia
        </div>
      </div>
    ),
    { ...size }
  )
}
