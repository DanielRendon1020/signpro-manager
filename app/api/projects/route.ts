import { supabase } from '../../../lib/supabase'
import { NextResponse } from "next/server"


export async function GET(request: Request){

  let { data: posts, error } = await supabase
  .from('posts')
  .select()

    
    return NextResponse.json(posts)
  }

