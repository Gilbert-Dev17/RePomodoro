import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import About from '@/components/ui/custom/About'

const Home = () => {

const Mode = [
    {
      name: 'POMODORO MODE',
      description: (
        <>
          Focus for 30 minutes, then rest.<br />
          Why 30? It balances deep focus without mental fatigue.
        </>
      ),
    },
    { name: 'REPOMODORO MODE', description: 'Earn your breaks equal to one-third of focused work.' },
]

  return (
    <main className='min-h-screen flex items-center p-8'>
        <About />
        <div className='flex flex-col items-center justify-center w-full space-y-4'>
            <Label className='text-7xl font-bold text-foreground'
            style={{ fontFamily: 'var(--font-fredoka)' }}
            >RePomodoro</Label>

            <p className='text-sm text-tertiary font-medium'
            style={{ fontFamily: 'var(--font-poppins)' }}>Choose a Mode</p>

            {Mode.map((mode) => (
                <Card key={mode.name} className='w-full max-w-md'>
                    <CardHeader>
                        <CardTitle className='text-md font-semibold text-accent'
                        style={{ fontFamily: 'var(--font-poppins)' }}
                        >{mode.name}</CardTitle>
                        <CardDescription className='text-sm font-medium'
                            style={{ fontFamily: 'var(--font-poppins)' }}>
                            {mode.description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </main>
  )
}

export default Home