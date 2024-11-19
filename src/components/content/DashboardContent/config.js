import { dateTimeFormats } from "@constants/common";
import helpers from "@utils/helpers";

const fieldWidth = 150;

export const getColumns = (t) => [
  {
    field: "addingDate",
    headerName: t("addingDate"),
    type: "string",
    width: fieldWidth,
    renderCell: ({ row }) =>
      helpers.getFormattedDateFromISOString(
        row.addingDate,
        dateTimeFormats.military
      )
  },
  {
    field: "libraryCode",
    headerName: t("libraryCode.title")
  },
  {
    field: "authorCode",
    headerName: t("authorCode.title")
  },
  {
    field: "author.firstName",
    headerName: t("authorFirstName.title"),
    type: "string",
    renderCell: ({ row }) => row.author.firstName
  },
  {
    field: "author.lastName",
    headerName: t("authorLastName.title"),
    type: "string",
    renderCell: ({ row }) => row.author.lastName,
    width: fieldWidth
  },
  {
    field: "title",
    headerName: t("title.title"),
    type: "string",
    width: fieldWidth
  },
  {
    field: "cityOfPublication",
    headerName: t("cityOfPublication.title"),
    type: "string"
  },
  {
    field: "publishingHouse",
    headerName: t("publishingHouse.title"),
    type: "string",
    width: fieldWidth
  },
  {
    field: "yearOfPublishing",
    headerName: t("yearOfPublishing.title"),
    type: "number",
    width: fieldWidth,
    renderCell: ({ row }) => row.yearOfPublishing.toString()
  },
  {
    field: "numberOfPages",
    headerName: t("numberOfPages.title"),
    type: "number",
    width: fieldWidth
  },
  {
    field: "numberOfCopies",
    headerName: t("numberOfCopies.title"),
    type: "number",
    width: fieldWidth
  },
  {
    field: "location",
    headerName: t("location.title"),
    type: "string"
  },
  {
    field: "sourceOfReceipt",
    headerName: t("sourceOfReceipt.title"),
    type: "string",
    width: fieldWidth
  }
];
