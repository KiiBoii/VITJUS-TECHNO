import { useState, useEffect } from "react";

export default function KaryawanForm({ addKaryawan, updateKaryawan, editingKaryawan, onClose }) {
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    email: "",
    jenis_kelamin: "",
    role: "Admin",
    pass: "", // State baru untuk password
    created_at: "",
  });

  useEffect(() => {
    if (editingKaryawan) {
      setForm({
        ...editingKaryawan,
        alamat: editingKaryawan.alamat || "",
        jenis_kelamin: editingKaryawan.jenis_kelamin || "",
        role: editingKaryawan.role || "Admin",
        pass: editingKaryawan.pass || "", // Load password jika sedang edit
        created_at: editingKaryawan.created_at || "",
      });
    } else {
      setForm({
        nama: "",
        alamat: "",
        email: "",
        jenis_kelamin: "",
        role: "Admin",
        pass: "",
        created_at: "",
      });
    }
  }, [editingKaryawan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi tambahan: Jika Admin, password wajib diisi
    if (form.role === "Admin" && !form.pass) {
      alert("Password wajib diisi untuk akun Admin!");
      return;
    }

    if (!form.nama || !form.alamat || !form.email || !form.jenis_kelamin || !form.role) {
      alert("Semua field wajib diisi!");
      return;
    }

    const dataToSubmit = { ...form };
    
    // Jika bukan Admin, kita bisa hapus passwordnya sebelum dikirim ke DB
    if (form.role !== "Admin") {
      delete dataToSubmit.pass;
    }

    if (!editingKaryawan) {
      delete dataToSubmit.created_at;
    }

    editingKaryawan ? updateKaryawan(dataToSubmit) : addKaryawan(dataToSubmit);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input Nama, Email, Alamat, Jenis Kelamin tetap sama */}
      <div>
        <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama</label>
        <input name="nama" id="nama" placeholder="Nama Lengkap" value={form.nama} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input name="email" id="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
      </div>
      <div>
        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
        <input name="alamat" id="alamat" placeholder="Alamat" value={form.alamat} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
      </div>
      <div>
        <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
        <select name="jenis_kelamin" id="jenis_kelamin" value={form.jenis_kelamin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required>
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select>
      </div>

      {/* Dropdown Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
        <select name="role" id="role" value={form.role} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" required>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Staff">Staff</option>
        </select>
      </div>

      {/* INPUT PASSWORD TAMBAHAN (Hanya muncul jika Role === Admin) */}
      {form.role === "Admin" && (
        <div className="animate-in fade-in duration-300">
          <label htmlFor="pass" className="block text-sm font-medium text-gray-700 text-orange-600 font-bold">Password Akun Admin</label>
          <input 
            name="pass" 
            id="pass" 
            type="password"
            placeholder="Masukkan Password untuk Login" 
            value={form.pass} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border-2 border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
            required={form.role === "Admin"} 
          />
        </div>
      )}

      {editingKaryawan && form.created_at && (
        <div>
          <label htmlFor="created_at" className="block text-sm font-medium text-gray-700">Tanggal Ditambahkan</label>
          <input name="created_at" id="created_at" value={formatDate(form.created_at)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed" readOnly />
        </div>
      )}

      <div className="flex justify-end space-x-4 mt-6">
        <button type="button" onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md shadow-md transition-colors">
          {editingKaryawan ? "Perbarui Karyawan" : "Tambah Karyawan"}
        </button>
      </div>
    </form>
  );
}