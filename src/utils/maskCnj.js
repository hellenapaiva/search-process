export function formatCnj(v){
    v=v.replace(/^(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/, "$1-$2.$3.$4.$5.$6")
    return v
}
