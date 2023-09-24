import { supabase } from '../../../lib/supabase'
import { NextResponse } from "next/server"


export async function GET(request: Request){

  let { data: projects, error } = await supabase
  .from('projects')
  .select()

    return NextResponse.json(projects)
  }

