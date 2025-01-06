import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Home } from 'lucide-react'
import { Banco } from '../types/banco'
import { useNavigate } from 'react-router-dom'
import { BankCard } from '@/components/bank-card'

export function SearchBank() {

    const navigate = useNavigate()
    const [bancoById, setBancoById] = useState<Banco | null>(null)
    const [searchId, setSearchId] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchBancoByCod = async () => {

        if (!searchId.trim()) {
            setError('Insira um ID válido')
            return
        }

        setLoading(true)
        setError(null)
        const response = await fetch(`http://localhost:3000/bancos/${searchId}`)
        const data = await response.json()

        if (!response.ok) {
            setError(data.message)
            setBancoById(null)
            setLoading(false)
            return
        }

        setBancoById(data)
        setLoading(false)
    }

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Pesquisar Banco por ID</CardTitle>
                    <Button
                        variant="outline"
                        onClick={() => navigate('/')}
                    >
                        <Home className="h-4 w-4 mr-2" />
                        Voltar
                    </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-4">
                        <Input
                            type="text"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            placeholder="Digite o ID do banco"
                            className="max-w-xs"
                        />
                        <Button
                            onClick={fetchBancoByCod}
                            disabled={loading}
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Buscar
                        </Button>
                    </div>

                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {bancoById !== null && (
                        <BankCard
                            key={bancoById.codigo_de_compensacao}
                            name={bancoById.nome_instituicao}
                            code={bancoById.codigo_de_compensacao}
                        />
                    )}
                </CardContent>
            </Card>
        </div>
    )
}