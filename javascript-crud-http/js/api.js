const URL__BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch(`${URL__BASE}/pensamentos`);
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL__BASE}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`${URL__BASE}/pensamentos/${id}`);
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(
        `${URL__BASE}/pensamentos/pensamentos/${pensamento.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pensamento),
        }
      );
      return await response.json();
    } catch (error) {
      alert("Erro ao editar pensamentos");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(
        `${URL__BASE}/pensamentos/pensamentos/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      alert("Erro ao excluir pensamentos");
      throw error;
    }
  },
};

export default api;
