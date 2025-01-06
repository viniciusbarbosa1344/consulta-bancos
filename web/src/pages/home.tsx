import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List, Search } from 'lucide-react'

export function Home() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Sistema de Bancos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button
                        className="w-full h-16 text-lg"
                        onClick={() => navigate('/list-banks')}
                    >
                        <List className="mr-2 h-6 w-6" />
                        Listar Bancos
                    </Button>
                    <Button
                        className="w-full h-16 text-lg"
                        onClick={() => navigate('/search-bank')}
                    >
                        <Search className="mr-2 h-6 w-6" />
                        Pesquisar Banco
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}