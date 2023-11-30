import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase/config';

type Params = {
    slug: string; 
}

export async function GET(request : Request, {params}: {params: Params}) {
    
    const docRef = doc( db, 'productos', params.slug)

    const docSnapShot = await getDoc(docRef)

    return NextResponse.json(docSnapShot.data())

}