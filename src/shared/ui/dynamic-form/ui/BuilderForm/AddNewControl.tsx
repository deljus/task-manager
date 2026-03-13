import { useState } from "react";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PlusIcon } from "@heroicons/react/24/solid";
import cn from "classnames";
import { CONTROLS } from "../../config/controls";
import { ControlType } from "../../models/controlTypes";

type NewControlType = {
  title: string;
  control: ControlType;
};

type Props = {
  onSave: (field: NewControlType) => void;
};

const schema = yup.object({
  title: yup.string().required("Поле обязательное для заполнения"),
  componentType: yup.string().required("Поле обязательное для заполнения"),
});

export function AddNewControl({ onSave }: Props) {
  const [isAddMode, setAddMode] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<yup.InferType<typeof schema>> = ({
    title,
    componentType,
  }) => {
    const control = CONTROLS.find(({ type }) => type === componentType);
    if (control) {
      onSave({
        title,
        control,
      });
      setAddMode(false);
      reset();
    }
  };

  return isAddMode ? (
    <form
      tabIndex={0}
      className="collapse collapse-open bg-base-100 border-base-300 border shadow-md absolute z-50 top-0 left-0 h-full bg-base-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="collapse-title font-semibold">Добавление нового поля</div>
      <div className="collapse-content text-sm flex flex-col space-y-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Заголовок</legend>
          <input
            type="text"
            className={cn("input  w-full", {
              "input-error": errors?.title,
            })}
            {...register("title")}
          />
          {errors?.title ? (
            <p className="label text-error">{errors?.title.message}</p>
          ) : null}
        </fieldset>
        <fieldset className="fieldset ">
          <legend className="fieldset-legend">Виджет</legend>
          <select
            className={cn("select  w-full", {
              "input-error": errors?.componentType,
            })}
            {...register("componentType")}
          >
            {CONTROLS.map(({ id, name, type }, index) => (
              <option key={id} value={type} defaultChecked={!index}>
                {name}
              </option>
            ))}
          </select>
          {errors?.componentType ? (
            <p className="label text-error">{errors?.componentType.message}</p>
          ) : null}
        </fieldset>
        <div className="flex justify-end space-x-2">
          <button type="submit" className="btn btn-outline btn-primary">
            Сохранить
          </button>
          <button
            type="button"
            className="btn btn-outline btn-error"
            onClick={() => setAddMode(false)}
          >
            Отмена
          </button>
        </div>
      </div>
    </form>
  ) : (
    <div className="fab">
      <button
        className="btn btn-primary btn-circle"
        onClick={() => setAddMode(true)}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
