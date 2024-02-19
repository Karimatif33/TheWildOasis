import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxGuestsPerBooking,
      breackfastPrice,
      maxBoogingLength,
    } = {},
  } = useSettings();
  const { updatSetting, isUpdating } = useUpdateSetting();
  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updatSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxBoogingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBoogingLength")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breackfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breackfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
