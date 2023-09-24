export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          address: string
          client_email: string
          client_name: string
          client_tel: string | null
          created_at: string
          design_file: boolean
          id: number
          install: boolean
          intall_date: string | null
          invoice: boolean
          materials: string | null
          name: string
          notes: string | null
          permit: boolean
          permit_status: string | null
          project_id: string
          stage: string
        }
        Insert: {
          address: string
          client_email: string
          client_name: string
          client_tel?: string | null
          created_at?: string
          design_file: boolean
          id?: number
          install: boolean
          intall_date?: string | null
          invoice: boolean
          materials?: string | null
          name: string
          notes?: string | null
          permit: boolean
          permit_status?: string | null
          project_id?: string
          stage: string
        }
        Update: {
          address?: string
          client_email?: string
          client_name?: string
          client_tel?: string | null
          created_at?: string
          design_file?: boolean
          id?: number
          install?: boolean
          intall_date?: string | null
          invoice?: boolean
          materials?: string | null
          name?: string
          notes?: string | null
          permit?: boolean
          permit_status?: string | null
          project_id?: string
          stage?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
