type Project = {
    id: string,
    created_at: string,
    name: string,
    address: string,
    client_name: string,
    client_email: string,
    client_tel: string,
    install: boolean,
    install_date: string,
    design_file: boolean,
    invoice: boolean,
    permit: boolean,
    permit_status: string,
    notes: string,
    stage: string,
    materials: string,
}

type Material = {
    id: string,
    created_at: string,
    name: string,
    price: string,
    color: string,
}