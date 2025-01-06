import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Home } from 'lucide-react'
import { Banco } from '../types/banco'
import { useNavigate } from 'react-router-dom'
import { BankCard } from '@/components/bank-card'

export function ListBanks() {

    const [bancos, setBancos] = useState<Banco[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate();

    useEffect(() => {
        fetchBancos()
    }, [])

    const fetchBancos = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch('http://localhost:3000/bancos')
            if (!response.ok) throw new Error('Erro ao buscar bancos')
            const data = await response.json()
            setBancos(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao buscar bancos')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader className="flex flex-col gap-2">
                    <header className='w-full flex flex-row items-center justify-between'>
                        <CardTitle>Lista de Bancos</CardTitle>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/')}
                        >
                            <Home className="h-4 w-4 mr-2" />
                            Voltar
                        </Button>
                    </header>
                    <span className='text-muted-foreground text-sm'>
                        {bancos.length} bancos encontrados
                    </span>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {loading ? (
                        <div className="flex justify-center p-4">
                            <Loader2 className="h-6 w-6 animate-spin" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            {bancos.map((banco) => (
                                <BankCard
                                    key={banco.codigo_de_compensacao}
                                    name={banco.nome_instituicao}
                                    code={banco.codigo_de_compensacao}
                                />
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}