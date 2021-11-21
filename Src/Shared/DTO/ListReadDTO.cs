using System.Collections.Generic;

namespace ChakraUiApp.Shared.DTO
{
    public class ListReadDTO<TReadDTO>
    {
        public int Total { get; set; }

        public IEnumerable<TReadDTO> Data { get; set; }
    }
}