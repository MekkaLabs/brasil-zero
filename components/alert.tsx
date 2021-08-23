import Container from './container'
import cn from 'classnames'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <div className="bg-black">
        <Container>
          <div className="py-2 text-center text-white text-sm">
            {preview ? (
              <>
                Está página é um modo de previsualização.{' '}
                <a
                  href="/api/exit-preview"
                  className="underline hover:text-cyan duration-200 transition-colors"
                >
                  Clique aqui
                </a>{' '}
                Para sair do modo de previsualização
              </>
            ) : (
              <>
                Não temos Partido, Não coletamos dados, Não temos Propagandas e Não estamos nem ai para o que você pensa.
              </>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Alert
