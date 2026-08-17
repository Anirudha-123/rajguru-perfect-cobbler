import React, { useState, useEffect } from "react";
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Image as ImageIcon,
  X,
} from "lucide-react";

export default function AdminGalleryManager({ onUpdate }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [beforeUrl, setBeforeUrl] = useState("");
  const [afterUrl, setAfterUrl] = useState("");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch("https://rajguru-perfect-cobbler.onrender.com/api/gallery");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === "rajguru2026") {
      setIsAdmin(true);
      setPasscode("");
    } else {
      alert("Incorrect Admin Passcode! (Try: rajguru2026)");
    }
  };

  const handleAddPair = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          beforeImage: beforeUrl,
          afterImage: afterUrl,
        }),
      });
      if (res.ok) {
        setNewTitle("");
        setBeforeUrl("");
        setAfterUrl("");
        fetchGallery();
        if (onUpdate) onUpdate();
      }
    } catch (err) {
      console.error("Error adding image pair:", err);
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm("Are you sure you want to delete this comparison item?")
    )
      return;
    try {
      const res = await fetch(`http://localhost:5000/api/gallery/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchGallery();
        if (onUpdate) onUpdate();
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div className="my-8 max-w-7xl mx-auto px-4">
      {/* Toggle Admin Control Panel Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#2c221e] border border-[#a37c52]/40 text-[#a37c52] px-4 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center space-x-2 hover:bg-[#a37c52] hover:text-[#1c1410] transition shadow-md"
        >
          {isAdmin ? <Unlock size={14} /> : <Lock size={14} />}
          <span>{isOpen ? "Close Admin Panel" : "Owner / Admin Portal"}</span>
        </button>
      </div>

      {/* Admin Panel Drawer */}
      {isOpen && (
        <div className="mt-4 bg-[#1c1410] border border-[#a37c52]/50 rounded-xl p-6 text-xs text-[#f4ebd0] space-y-6 shadow-2xl">
          {!isAdmin ? (
            <form
              onSubmit={handleLogin}
              className="max-w-sm mx-auto space-y-4 text-center py-4"
            >
              <Lock className="mx-auto text-[#a37c52]" size={32} />
              <h3 className="font-serif text-lg font-bold">
                Admin Authentication Required
              </h3>
              <p className="text-gray-400 text-[11px]">
                Enter owner passkey to manage before/after restoration slides.
              </p>
              <input
                type="password"
                placeholder="Enter Passkey (rajguru2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-[#2c221e] border border-[#a37c52]/40 rounded p-2 text-center text-[#f4ebd0] focus:outline-none focus:border-[#a37c52]"
              />
              <button
                type="submit"
                className="w-full bg-[#a37c52] text-[#1c1410] font-bold py-2 rounded uppercase tracking-wider hover:opacity-90 transition"
              >
                Authenticate Admin
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#a37c52]/20 pb-4">
                <div>
                  <span className="text-[#a37c52] uppercase tracking-widest text-[10px]">
                    Authorized Access
                  </span>
                  <h3 className="font-serif text-xl font-bold">
                    Manage Before & After Gallery
                  </h3>
                </div>
                <button
                  onClick={() => setIsAdmin(false)}
                  className="text-gray-400 hover:text-white text-[11px] underline"
                >
                  Lock Session
                </button>
              </div>

              {/* Add New Pair Form */}
              <form
                onSubmit={handleAddPair}
                className="bg-[#2c221e] p-4 rounded-lg border border-[#a37c52]/30 space-y-4"
              >
                <h4 className="font-bold uppercase tracking-wider text-[#a37c52] flex items-center space-x-1.5">
                  <Plus size={14} />
                  <span>Upload New Before & After Transformation</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Service Title (e.g., Luxury Boot Clean)"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="bg-[#1c1410] border border-[#a37c52]/30 rounded p-2 text-[#f4ebd0]"
                  />
                  <input
                    required
                    type="url"
                    placeholder="Before Image URL (Unsplash/Direct Link)"
                    value={beforeUrl}
                    onChange={(e) => setBeforeUrl(e.target.value)}
                    className="bg-[#1c1410] border border-[#a37c52]/30 rounded p-2 text-[#f4ebd0]"
                  />
                  <input
                    required
                    type="url"
                    placeholder="After Image URL (Unsplash/Direct Link)"
                    value={afterUrl}
                    onChange={(e) => setAfterUrl(e.target.value)}
                    className="bg-[#1c1410] border border-[#a37c52]/30 rounded p-2 text-[#f4ebd0]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#a37c52] to-[#8c653e] text-[#1c1410] font-bold py-2 rounded uppercase tracking-wider hover:opacity-90 transition"
                >
                  Publish to Live Gallery
                </button>
              </form>

              {/* Current Items List to Manage/Delete */}
              <div className="space-y-2">
                <h4 className="font-bold text-gray-300 uppercase tracking-wider text-[11px]">
                  Existing Active Slides ({items.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-60 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div
                      key={item._id}
                      className="bg-[#2c221e] p-3 rounded border border-[#a37c52]/20 flex justify-between items-center"
                    >
                      <div className="truncate pr-2">
                        <p className="font-bold text-[#f4ebd0] truncate">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          ID: {item._id.slice(-6)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-900/40 border border-red-500/40 text-red-300 p-1.5 rounded hover:bg-red-900 transition"
                        title="Delete Slide"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
