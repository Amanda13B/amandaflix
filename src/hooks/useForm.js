import {useState} from 'react';

function useForm(valoresIniciais)
{
  const [valores, setValores] = useState(valoresIniciais);

  function setValorUnico(chaveCampo, valorCampo)
  {
    setValores({
      ...valores,
      [chaveCampo]: valorCampo //nome: valorCampo
    })
  }

  function handleChange(info)
  {
    console.log("Entrou na função handleChange");
    setValorUnico(info.target.getAttribute('name'), info.target.value);
  }

  function clearForm()
  {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm
  }
}

export default useForm;