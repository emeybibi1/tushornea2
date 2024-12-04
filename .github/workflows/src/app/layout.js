import './globals.css'

export const metadata = {
 title: 'TUsHornea2',
 description: 'Los mejores combos de comidas típicas a domicilio',
}

export default function RootLayout({ children }) {
 return (
   <html lang="es">
     <body>{children}</body>
   </html>
 )
}
