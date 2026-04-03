/**
 * Logo LEIbmec — usa a imagem oficial com fundo transparente
 *
 * Props:
 *   size      — controla a altura em px (default 36)
 *   className — classes adicionais (podem sobrescrever height via Tailwind se necessário)
 */
export function Logo({ size = 36, fill = false, className = '' }) {
  return (
    <img
      src="/leibmec-logo.png"
      alt="LEIbmec — Liga de Empreendedorismo"
      style={fill ? { height: '100%', width: 'auto', display: 'block' } : { height: size, width: 'auto', display: 'block' }}
      className={className}
    />
  )
}

export function LogoDark({ size = 36, className = '' }) {
  return (
    <img
      src="/leibmec-logo.png"
      alt="LEIbmec — Liga de Empreendedorismo"
      style={{ height: size, width: 'auto', display: 'block' }}
      className={className}
    />
  )
}
