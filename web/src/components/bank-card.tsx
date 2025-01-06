import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark } from 'lucide-react';

interface Props {
    name: string;
    code: number;
}

export function BankCard(props: Props) {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center gap-2'>
                <Landmark size={20} />
                <CardTitle style={{ margin: 0 }} className='text-lg'>
                    {props.name}
                </CardTitle>
            </CardHeader>
            <CardFooter>
                <span className="font-medium text-xs text-muted-foreground-">Código de Compensação: {props.code}</span>
            </CardFooter>
        </Card>
    )
}