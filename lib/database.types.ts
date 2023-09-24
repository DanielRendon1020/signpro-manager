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
      materials: {
        Row: {
          color: string | null
          created_at: string
          id: number
          material_id: string
          name: string
          price: number
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: number
          material_id?: string
          name: string
          price: number
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: number
          material_id?: string
          name?: string
          price?: number
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
          stage: string | null
        }
        Insert: {
          address: string
          client_email: string
          client_name: string
          client_tel?: string | null
          created_at?: string
          design_file?: boolean
          id?: number
          install?: boolean
          intall_date?: string | null
          invoice?: boolean
          materials?: string | null
          name: string
          notes?: string | null
          permit?: boolean
          permit_status?: string | null
          project_id?: string
          stage?: string | null
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
          stage?: string | null
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
